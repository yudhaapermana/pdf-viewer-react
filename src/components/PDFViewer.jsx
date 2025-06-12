import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

//  Fungsi untuk loading state
const renderLoader = () => (
    <div className="p-4 text-center text-gray-500">Memuat PDF...</div>
);

// Fungsi untuk error state
const renderError = (error) => (
    <div className="h-screen flex flex-col justify-center items-center text-red-600 text-center">
        <p className="text-lg font-semibold">Gagal memuat PDF</p>
        <p className="text-sm mt-1">{error.message}</p>
    </div>
);


const PDFViewer = () => {
	const layoutPlugin = defaultLayoutPlugin();

    const fileUrl = "https://api.nextbv.app/v1/files/e2a5032e-ca35-4993-979a-5007f0546578/content";
    const workerUrl = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

	return (
		<div className="h-screen">
			<Worker workerUrl={workerUrl}>
				<Viewer
					fileUrl={fileUrl}
					plugins={[layoutPlugin]}
					defaultScale={SpecialZoomLevel.PageFit}
					renderError={renderError}
                    renderLoader={renderLoader}										
				/>
			</Worker>
		</div>
	);
};

export default PDFViewer;
