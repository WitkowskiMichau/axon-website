import { useState } from "react";
import { useRouter } from "next/router";
import uploadFile from "@/services/uploadService";

const DragAndDrop = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [uploading, setUploading] = useState(false);
    const router = useRouter();

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            console.log("Wybierz plik przed uploadem!");
            return;
        }

        setUploading(true);

        try {
            await uploadFile(file);
            console.log("Plik został przesłany pomyślnie!");
            router.push("/visualize");
        } catch (error) {
            console.log("Wystąpił błąd podczas przesyłania pliku.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center border-dashed border-2 border-gray-400 rounded-lg p-6 bg-gray-800 text-gray-200">
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`w-full h-32 flex items-center justify-center ${
                    isDragging ? "border-yellow-500 bg-gray-800" : "border-gray-400"
                } border-dashed rounded-lg`}
            >
                <p>{isDragging ? "Upuść plik tutaj" : "Przeciągnij i upuść plik lub kliknij poniżej"}</p>
            </div>
            <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
            />
            <label
                htmlFor="file-upload"
                className="mt-4 text-blue-400 underline cursor-pointer"
            >
                Wybierz plik
            </label>
            {file && <p className="mt-2 text-sm">{file.name}</p>}
            <button
                onClick={handleUpload}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-600"
                disabled={uploading}
            >
                {uploading ? "Przesyłanie..." : "Wyślij"}
            </button>
        </div>
    );
};

export default DragAndDrop;