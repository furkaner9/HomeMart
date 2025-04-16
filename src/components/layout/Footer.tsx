import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">El Yapımı</h3>
            <p className="text-gray-600">
              Benzersiz el yapımı ürünleri keşfedin ve satın alın.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-indigo-600">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Hakkımızda
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Yardım</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Kargo Bilgileri
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  İade Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Sık Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">İletişim</h3>
            <address className="not-italic text-gray-600">
              <p>İstanbul, Türkiye</p>
              <p>Email: info@elyapimi.com</p>
              <p>Telefon: (0212) 123 45 67</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} El Yapımı. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
