import { sendMail } from "@/service/mailService";

export async function POST(request) {

  const {subject, body } = await request.json()

    try {
      const res = await sendMail(
        subject,
        "sharkteamvi6@gmail.com",
        body
      );
      
      return Response.json(res);
    } catch (error) {
      return Response.json({ error });
    }

    
  }