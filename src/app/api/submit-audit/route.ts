import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface AuditFormBody {
  name: string;
  email: string;
  storeUrl: string;
  platform: string;
  revenue: string;
}

/* ------------------------------------------------------------------ */
/*  Server-side validation (mirrors client-side rules)                 */
/* ------------------------------------------------------------------ */

function validateBody(body: unknown): body is AuditFormBody {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length >= 2 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.storeUrl === "string" &&
    /^https?:\/\/.+\..+/.test(b.storeUrl) &&
    typeof b.platform === "string" &&
    ["shopify", "woocommerce", "bigcommerce", "magento", "other"].includes(
      b.platform
    ) &&
    (typeof b.revenue === "string" || b.revenue === undefined)
  );
}

/* ------------------------------------------------------------------ */
/*  Google Auth (reused across invocations in the same instance)       */
/* ------------------------------------------------------------------ */

function getAuthClient() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;

  if (!privateKey || !clientEmail) {
    throw new Error(
      "Missing Google Sheets credentials in environment variables"
    );
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

/* ------------------------------------------------------------------ */
/*  POST handler                                                       */
/* ------------------------------------------------------------------ */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validateBody(body)) {
      return NextResponse.json(
        { error: "Invalid form data. Please check all required fields." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    const auth = getAuthClient();
    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    if (!spreadsheetId) {
      throw new Error("Missing GOOGLE_SHEETS_SPREADSHEET_ID");
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            body.name.trim(),
            body.email.trim().toLowerCase(),
            body.storeUrl.trim(),
            body.platform,
            body.revenue || "Not provided",
            timestamp,
            "hpc-landing",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error("Sheet append error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or email sales@wisdmlabs.com.",
      },
      { status: 500 }
    );
  }
}
