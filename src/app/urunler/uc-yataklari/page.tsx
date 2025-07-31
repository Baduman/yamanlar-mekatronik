import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function UcYataklari() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4">
            <Link href="/urunler/lineer-hareket-sistemleri" className="flex items-center text-[#00b9bf] hover:text-[#009aa0] transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Lineer Hareket Sistemlerine Dön
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Uç Yatakları</h1>
          <p className="text-gray-600 mt-2">Hassas uç yatakları ve destek sistemleri</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uç Yatakları</h2>
            <p className="text-gray-600 mb-8">Bu sayfa yakında güncellenecektir.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/teklif-al" className="bg-[#00b9bf] hover:bg-[#009aa0] text-white px-6 py-3 rounded-lg font-medium transition-colors">Teklif Alın</Link>
              <Link href="/iletisim" className="border border-[#00b9bf] text-[#00b9bf] hover:bg-[#00b9bf] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">İletişime Geçin</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 