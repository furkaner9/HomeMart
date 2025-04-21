// pages/about.tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Hakkımızda | Ev Yapımı Lezzetler</title>
        <meta
          name="description"
          content="Ev Yapımı Lezzetler hakkında bilgi edinebilir, hikayemizi ve değerlerimizi keşfedebilirsiniz."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Hakkımızda
          </h1>
          <div className="text-xl text-gray-600 italic">
            Doğal Lezzetlerin Adresi
          </div>
        </div>

        <div className="w-full mb-12 rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full h-80 md:h-96">
            <Image
              src="/images/about-hero.jpg"
              alt="Ev Yapımı Lezzetler ekibi"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-teal-700 border-b-2 border-amber-400 pb-2 mb-6">
            Hikayemiz
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              Her şey kurucumuz Ayşe Hanım'ın anneannesinden öğrendiği
              geleneksel reçeteleri ve doğal yöntemleri kullanarak hazırladığı
              ev yapımı reçelleri arkadaşlarıyla paylaşmasıyla başladı. Kısa
              sürede çevreden gelen talepler üzerine bu lezzetleri daha geniş
              kitlelere ulaştırmak için kolları sıvadık.
            </p>
            <p className="text-lg leading-relaxed">
              Bugün, Türkiye'nin dört bir yanından özenle seçtiğimiz
              malzemelerle, geleneksel yöntemleri modern hijyen koşullarında
              birleştirerek hazırladığımız ürünlerimizi sizlerle buluşturuyoruz.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-teal-700 border-b-2 border-amber-400 pb-2 mb-6">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">
                Doğallık
              </h3>
              <p className="text-gray-700">
                Ürünlerimizde koruyucu, katkı maddesi ve yapay tatlandırıcı
                kullanmıyoruz.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">
                Şeffaflık
              </h3>
              <p className="text-gray-700">
                Tüm ürünlerimizin içeriğini ve üretim süreçlerini sizinle açıkça
                paylaşıyoruz.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">
                Sürdürülebilirlik
              </h3>
              <p className="text-gray-700">
                Yerel üreticilerle çalışarak hem ekonomiye katkı sağlıyor hem de
                karbon ayak izimizi azaltıyoruz.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">
                Kalite
              </h3>
              <p className="text-gray-700">
                Her bir ürünümüz sevgiyle ve özenle hazırlanıyor, sofralarınıza
                gelmeden önce titiz kontrollerden geçiyor.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-teal-700 border-b-2 border-amber-400 pb-2 mb-6">
            Ürünlerimiz
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Mutfağımızdan çıkan her ürün, yılların deneyimi ve sevgisiyle
            hazırlanıyor:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-md border-l-4 border-teal-600 hover:bg-green-100 transition duration-300 hover:translate-x-1">
              El yapımı reçeller ve marmelatlar
            </div>
            <div className="bg-green-50 p-4 rounded-md border-l-4 border-teal-600 hover:bg-green-100 transition duration-300 hover:translate-x-1">
              Doğal fermente ürünler
            </div>
            <div className="bg-green-50 p-4 rounded-md border-l-4 border-teal-600 hover:bg-green-100 transition duration-300 hover:translate-x-1">
              Geleneksel tariflerle hazırlanan tatlılar
            </div>
            <div className="bg-green-50 p-4 rounded-md border-l-4 border-teal-600 hover:bg-green-100 transition duration-300 hover:translate-x-1">
              Mevsimlik turşular
            </div>
            <div className="bg-green-50 p-4 rounded-md border-l-4 border-teal-600 hover:bg-green-100 transition duration-300 hover:translate-x-1">
              Özel baharat karışımları
            </div>
            <div className="bg-green-50 p-4 rounded-md border-l-4 border-teal-600 hover:bg-green-100 transition duration-300 hover:translate-x-1">
              Ev yapımı makarnalar ve erişteler
            </div>
            <div className="bg-green-50 p-4 rounded-md border-l-4 border-teal-600 hover:bg-green-100 transition duration-300 hover:translate-x-1">
              Doğal meyve kuruları
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Ürünlerimizi Keşfedin
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-teal-700 border-b-2 border-amber-400 pb-2 mb-6">
            Üretim Felsefemiz
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              Her bir kavanoz, her bir paket hazırlanırken annelerimizin,
              anneannelerimizin mutfağındaki özeni yaşatmaya çalışıyoruz. Modern
              teknolojinin imkanlarını kullanırken, geleneksel lezzetlerden ve
              yöntemlerden ödün vermiyoruz.
            </p>
            <p className="text-lg leading-relaxed">
              Ürünlerimiz hiçbir zaman fabrikasyon üretim bandından çıkmıyor;
              her biri usta ellerden, gerçek bir mutfaktan sofralarınıza
              ulaşıyor.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="w-full sm:w-64 h-48 relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
              <Image
                src="/images/production-1.jpg"
                alt="Üretim süreci"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full sm:w-64 h-48 relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
              <Image
                src="/images/production-2.jpg"
                alt="Hammadde seçimi"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full sm:w-64 h-48 relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
              <Image
                src="/images/production-3.jpg"
                alt="El işçiliği"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-teal-700 border-b-2 border-amber-400 pb-2 mb-6">
            Bize Ulaşın
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Sorularınız, önerileriniz veya özel siparişleriniz için bizimle
            iletişime geçebilirsiniz:
          </p>
          <div className="space-y-3 mb-6">
            <div className="text-gray-700">
              <strong className="font-medium">Adres:</strong> Zeytinlik
              Mahallesi, Lezzet Sokak No: 42, Kadıköy/İstanbul
            </div>
            <div className="text-gray-700">
              <strong className="font-medium">Telefon:</strong> 0216 555 44 33
            </div>
            <div className="text-gray-700">
              <strong className="font-medium">E-posta:</strong>{" "}
              info@evyapimilezzetler.com
            </div>
            <div className="text-gray-700">
              <strong className="font-medium">Çalışma Saatleri:</strong>{" "}
              Pazartesi-Cumartesi 09:00-18:00
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com/evyapimilezzetler"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-teal-600 text-white rounded-full hover:bg-orange-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://facebook.com/evyapimilezzetler"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-teal-600 text-white rounded-full hover:bg-orange-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/evyapimilezzetler"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-teal-600 text-white rounded-full hover:bg-orange-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </section>

        <div className="text-center italic text-gray-600 my-8 py-4 border-t border-b border-gray-200">
          <blockquote className="text-xl">
            "Anneannelerimizden öğrendiğimiz lezzetleri, gelecek nesillere
            aktarmak için buradayız."
          </blockquote>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
