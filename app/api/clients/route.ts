import { Client } from "./interfaces";

const clients: Client[] = [
    {
        name: 'Jorge Jorginho',
        address: 'rua legal'
    },
    {
        name: 'Pedro Pedroso',
        address: 'rua do pedro'
    },
    {
        name: 'Manoel Gomes',
        address: 'rua do olhaaaaa'
    },
];
export function GET() {
  return Response.json(clients);
}

export async function POST(request: Request) {
    const form = await request.formData();
    const name = form.get('name') as string;
    const address = form.get('address') as string;

    clients.push({
        name,
        address
    });

    return Response.json({
        status: "Added"
    }

    );
  };
  