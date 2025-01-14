import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import xlsx from 'xlsx';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req: NextApiRequest & { file?: Express.Multer.File }, res: NextApiResponse) => {
    console.log(`Received ${req.method} request to /api/upload`);

    if (req.method === 'POST') {
        upload.single('file')(req as unknown as Express.Request, res as unknown as Express.Response, (err: Error) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded' });
            }

            try {
                const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = xlsx.utils.sheet_to_json(sheet);

                return res.status(200).json(jsonData);
            } catch (error) {
                return res.status(500).json({ error: error.message || 'Internal server error' });
            }
        });
    } else {
        console.log(`Method ${req.method} not allowed`);
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: 'Method not allowed' });
    }
};

export default handler;