import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: 'Lineer Hareket Sistemleri',
    desc: 'Başta HIWIN olmak üzere Lineer hareket sistemleri yüksek hassasiyet ve dayanıklılık sunan lineer destek ürünleri, vidalı miller, Lineer raylar ,lineer arabalar ve teleskopik raylar gibi birçok ürünleri müşterilerimize sunuyoruz. HIWIN ve tüm diğer hareket sistemleri çözümleri hakkında bilgi ve fiyat almak için ürünlere tıklayınız',
    img: '/productImage/Lineer Kızak ve Araballarr.png',
    button: 'Detaylı Bilgi',
    catalogButton: 'Katalog',
    pageUrl: '/urunler/lineer-hareket-sistemleri',
    reverse: false,
  },
  {
    title: 'Kremayer Pinyon/Dişli Sistemler',
    desc: 'Kremayer ve pinyon sistemleri, dönüş hareketini lineer hareketle birleştiren önemli bileşenlerdir. Yamanlar Mekatronik, çeşitli dişli oranlarına sahip dişli sistemleri sunarak, güç aktarımında ve hareket kontrolünde esneklik sağlar.  Dayanıklı malzemeleri ve sağlam yapıları ile uzun ömür ve güvenilirlik sunarlar. Tüm Kremayer ve Pinyon / Dişli Sistemleri çözümleri hakkında bilgi ve fiyat almak için ürünlere tıklayınız',
    img: '/productImage/Kremayer ve Dişli Pinyon.jpg',
    button: 'Detaylı Bilgi',
    catalogButton: 'Katalog',
    pageUrl: '/urunler/kremayer-pinyon',
    reverse: true,
  },
  {
    title: 'Güç Aktarım Ürünleri',
    desc: 'Güç aktarımında kritik bir rol oynayan güç aktarım ürünleri, makine ve ekipmanlar arasında verimli bir bağlantı sağlar. Yamanlar Mekatronik olarak, dişliler, makaralar, kayışlar ve zincirler gibi geniş bir ürün yelpazesine sahibiz. Bu ürünler, enerji verimliliğini artırırken, işletmelerin performansını da yükseltir güç aktarım çözümleri hakkında bilgi ve fiyat almak için ürünlere tıklayınız.',
    img: '/productImage/GucAktarimUrunleri.jpg',
    button: 'Detaylı Bilgi',
    catalogButton: 'Katalog',
    pageUrl: '/urunler/guc-aktarim-urunleri',
    reverse: false,
  },
];

const ProductsSection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">Ürünlerimiz</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12 px-4 text-sm md:text-base">
          Endüstriyel mühendislik çözümlerinde öncü olan firmamız, yüksek kaliteli lineer hareket sistemleri ithalatı yapmaktadır. Ürün gamımız, sektördeki en güvenilir markalarından biri olan Başta HIWIN olmak üzere bir çok kendini ispatlamış markaları sunmaktayız.
        </p>
        <div className="space-y-12 md:space-y-16">
          {products.map((product) => (
            <div
              key={product.title}
              className={`flex flex-col md:flex-row ${product.reverse ? 'md:flex-row-reverse' : ''} items-center md:items-stretch gap-6 md:gap-12`}
            >
              <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-0">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">{product.desc}</p>
                <div className="flex gap-3">
                  <Link
                    href={product.pageUrl}
                    className="inline-block bg-[#4CAF50] hover:bg-[#45a049] text-white font-medium px-4 py-2 md:px-6 md:py-2 rounded-lg transition-colors text-sm md:text-base"
                  >
                    {product.catalogButton}
                  </Link>
                  <Link
                    href={`/teklif-al?product=${encodeURIComponent(product.title)}`}
                    className="inline-block bg-[#00b9bf] hover:bg-[#009aa0] text-white font-medium px-4 py-2 md:px-6 md:py-2 rounded-lg transition-colors text-sm md:text-base"
                  >
                    {product.button}
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center items-center px-4 md:px-0">
                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-sm md:max-w-none">
                  <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-[#00b9bf] to-[#00d4da] rounded-full"></div>
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-[#00b9bf] to-[#00d4da] rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-[#00b9bf] to-[#00d4da] rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-[#00b9bf] to-[#00d4da] rounded-full"></div>
                  
                  <div className="relative z-10">
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={600}
                      height={450}
                      className="w-full h-auto max-w-xs md:max-w-xl rounded-2xl object-contain"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00b9bf]/5 to-[#00d4da]/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 