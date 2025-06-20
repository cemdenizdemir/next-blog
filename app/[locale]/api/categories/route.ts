import { Locale } from "@/i18n/routing";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: Locale }> }
) {
  const { locale } = await params;

  // const url = new URL(request.url);
  // console.log("-----", request);

  return Response.json({ message: "Hello World", locale });
}
