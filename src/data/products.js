import A36 from "../assets/A36.webp";
import A56 from "../assets/A56.webp";
import redmi14C from "../assets/redmi14c.webp";
import S25 from "../assets/S25.png";
import xiaomi14Ultra from "../assets/xiaomi14Ultra.webp";

const productsData = [
  {
    id: 1,
    name: "Samsung A36",
    marca: "Samsung",
    image: A36,
    description:
      "Almacenamiento: 128/256GB, Cámara frontal: 12 MP, Cámara posterior: 50 MP + 8 MP + 5 MP, Sistema Operativo: Android 14, RAM: 8GB, Bateria: Li-Ion 5000 mAh, Pantalla: 6.7.",
    price: 788000,
    stock: 10,
    category: "Smartphone",
  },
  {
    id: 2,
    name: "Samsung A56",
    marca: "Samsung",
    image: A56,
    description:
      "Almacenamiento: 128/256GB, Cámara frontal: 32 MP, Cámara posterior: 50 MP + 12 MP + 5 MP, Sistema Operativo: Android 14, RAM: 8GB + 8GB PLUS, Bateria: Li-Ion 5000 mAh, Pantalla: 6.7.",
    price: 966000,
    stock: 9,
    category: "Smartphone",
  },
  {
    id: 3,
    name: "Redmi 14C",
    marca: "Redmi",
    image: redmi14C,
    description:
      "Procesador: MediaTek Helio G81-Ultra, CPU: Cortex-A75+Cortex-A55, Frecuencia de CPU máxima: 2.0GHz, GPU: Mali-G52 MC2, Almacenamiento: 4GB RAM + 128GB ALMACENAMIENTO INTERNO, 4GB RAM + 256 ALMACENAMIENTO INTERNO...",
    price: 398000,
    stock: 15,
    category: "Smartphone",
  },
  {
    id: 4,
    name: "Samsung S25",
    marca: "Samsung",
    image: S25,
    description:
      "Celular Galaxy S25 Ultra, Pantalla de 6.9 QHD Dynamic AMOLED 2X, Procesador: Snapdragon 8 Elite, Almacenamiento: 256GB, RAM: 12GB, Cámaras: 200 MP + 50 MP + 50 MP + 10 MP, batería: 5000 mAh...",
    price: 1655000,
    stock: 8,
    category: "Smartphone",
  },
  {
    id: 5,
    name: "Xiaomi 14 Ultra",
    marca: "Xiaomi",
    image: xiaomi14Ultra,
    description:
      "Procesador: Snapdragon 8 Gen 3, RAM: 16 GB, Almacenamiento: 512 GB, Pantalla: AMOLED WQHD+, Cámaras Leica: 50 MP múltiples, Batería: 5000 mAh...",
    price: 2958000,
    stock: 18,
    category: "Smartphone",
  },
  {
    id: 6,
    name: "Xiaomi 14 Pro",
    marca: "Xiaomi",
    image: "https://http2.mlstatic.com/D_NQ_NP_707540-MLA81703156570_012025-O.webp",
    description:
      "Procesador: Snapdragon 8 Gen 3, RAM: 16 GB, Almacenamiento: 512 GB, Pantalla: AMOLED WQHD+, Cámaras Leica: 50 MP múltiples, Batería: 5000 mAh...",
    price: 1688000,
    stock: 25,
    category: "Smartphone",
  },
  {
    id: 7,
    name: "iPhone 13",
    marca: "iPhone13",
    image: "https://http2.mlstatic.com/D_NQ_NP_881016-MLM51559383738_092022-O.webp",
    description:
      "Diseño elegante con un rendimiento excepcional. Cuenta con una pantalla Super Retina XDR de 6.1 pulgadas, cámara dual avanzada para fotos y videos de alta calidad, procesador A15 Bionic para un funcionamiento rápido y eficiente, y mejoras en la duración de la batería. Además, incluye características de seguridad como detección de choques y llamadas de emergencia vía satélite, para mantenerte siempre conectado y protegido.",
    price: 750999,
    stock: 20,
    category: "Smartphone",
  },
  {
    id: 8,
    name: "iPhone 13 Pro",
    marca: "iPhone13",
    image: "https://http2.mlstatic.com/D_NQ_NP_753104-MLA47778455981_102021-O.webp",
    description:
      "Diseño elegante con un rendimiento excepcional. Cuenta con una pantalla Super Retina XDR de 6.1 pulgadas, cámara dual avanzada para fotos y videos de alta calidad, procesador A15 Bionic para un funcionamiento rápido y eficiente, y mejoras en la duración de la batería. Además, incluye características de seguridad como detección de choques y llamadas de emergencia vía satélite, para mantenerte siempre conectado y protegido.",
    price: 850927,
    stock: 28,
    category: "Smartphone",
  },
  {
    id: 9,
    name: "iPhone 13 Pro Max",
    marca: "iPhone13",
    image: "https://http2.mlstatic.com/D_NQ_NP_649602-MLA47778541962_102021-O.webp",
    description:
      "Diseño elegante con un rendimiento excepcional. Cuenta con una pantalla Super Retina XDR de 6.1 pulgadas, cámara dual avanzada para fotos y videos de alta calidad, procesador A15 Bionic para un funcionamiento rápido y eficiente, y mejoras en la duración de la batería. Además, incluye características de seguridad como detección de choques y llamadas de emergencia vía satélite, para mantenerte siempre conectado y protegido.",
    price: 900938,
    stock: 17,
    category: "Smartphone",
  },
  {
    id: 10,
    name: "iPhone 14",
    marca: "iPhone14",
    image: "https://http2.mlstatic.com/D_NQ_NP_918579-MLM51559384401_092022-O.webp",
    description:
      "El iPhone 15 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas, sistema de cámara avanzado con sensores de última generación para fotos y videos profesionales, y el chip A16 Bionic que ofrece un rendimiento excepcional y eficiencia energética. Su diseño elegante y durable, junto con mejoras en la duración de la batería y conectividad 5G, lo convierten en un dispositivo ideal para usuarios exigentes.",
    price: 1103199,
    stock: 14,
    category: "Smartphone",
  },
  {
    id: 11,
    name: "iPhone 14 Pro",
    marca: "iPhone14",
    image: "https://http2.mlstatic.com/D_NQ_NP_913741-MLM51559386469_092022-O.webp",
    description:
    "El iPhone 16 presenta una pantalla Super Retina XDR Pro de 6.1 pulgadas con tecnología ProMotion para una experiencia visual fluida. Equipado con el nuevo chip A17 Bionic que mejora significativamente el rendimiento y la eficiencia, incluye sistema avanzado de cámaras con sensores LiDAR, capacidades de video en 8K, y mejoras en batería para mayor duración. Además, su diseño ligero y resistente está pensado para la máxima comodidad y durabilidad.",  
    price: 1203000,
    stock: 12,
    category: "Smartphone",
  },
  {
    id: 12,
    name: "iPhone 14 Pro Max",
    marca: "iPhone14",
    image: "https://http2.mlstatic.com/D_NQ_NP_728476-MLU78878973712_092024-O.webp",
    description:
    "El iPhone 16 presenta una pantalla Super Retina XDR Pro de 6.1 pulgadas con tecnología ProMotion para una experiencia visual fluida. Equipado con el nuevo chip A17 Bionic que mejora significativamente el rendimiento y la eficiencia, incluye sistema avanzado de cámaras con sensores LiDAR, capacidades de video en 8K, y mejoras en batería para mayor duración. Además, su diseño ligero y resistente está pensado para la máxima comodidad y durabilidad.",  
    price: 1299000,
    stock: 24,
    category: "Smartphone",
  },
  {
    id: 13,
    name: "iPhone 15",
    marca: "iPhone15",
    image: "https://http2.mlstatic.com/D_NQ_NP_759471-MLA71782897602_092023-O.webp",
    description:
    "El iPhone 16 presenta una pantalla Super Retina XDR Pro de 6.1 pulgadas con tecnología ProMotion para una experiencia visual fluida. Equipado con el nuevo chip A17 Bionic que mejora significativamente el rendimiento y la eficiencia, incluye sistema avanzado de cámaras con sensores LiDAR, capacidades de video en 8K, y mejoras en batería para mayor duración. Además, su diseño ligero y resistente está pensado para la máxima comodidad y durabilidad.",  
    price: 1399000,
    stock: 12,
    category: "Smartphone",
  },
  {
    id: 14,
    name: "iPhone 15 Pro",
    marca: "iPhone15",
    image: "https://http2.mlstatic.com/D_NQ_NP_891263-MLA71783089058_092023-O.webp",
    description:
    "El iPhone 16 presenta una pantalla Super Retina XDR Pro de 6.1 pulgadas con tecnología ProMotion para una experiencia visual fluida. Equipado con el nuevo chip A17 Bionic que mejora significativamente el rendimiento y la eficiencia, incluye sistema avanzado de cámaras con sensores LiDAR, capacidades de video en 8K, y mejoras en batería para mayor duración. Además, su diseño ligero y resistente está pensado para la máxima comodidad y durabilidad.",  
    price: 1480990,
    stock: 12,
    category: "Smartphone",
  },
  {
    id: 15,
    name: "iPhone 15 Pro Max",
    marca: "iPhone15",
    image: "https://http2.mlstatic.com/D_NQ_NP_807511-MLA80694701523_112024-O.webp",
    description:
    "El iPhone 16 presenta una pantalla Super Retina XDR Pro de 6.1 pulgadas con tecnología ProMotion para una experiencia visual fluida. Equipado con el nuevo chip A17 Bionic que mejora significativamente el rendimiento y la eficiencia, incluye sistema avanzado de cámaras con sensores LiDAR, capacidades de video en 8K, y mejoras en batería para mayor duración. Además, su diseño ligero y resistente está pensado para la máxima comodidad y durabilidad.",  
    price: 1610000,
    stock: 12,
    category: "Smartphone",
  },
  {
    id: 16,
    name: "iPhone 16",
    marca: "iPhone16",
    image: "https://http2.mlstatic.com/D_NQ_NP_677076-MLU79116568655_092024-O.webp",
    description:
    "El iPhone 16 presenta una pantalla Super Retina XDR Pro de 6.1 pulgadas con tecnología ProMotion para una experiencia visual fluida. Equipado con el nuevo chip A17 Bionic que mejora significativamente el rendimiento y la eficiencia, incluye sistema avanzado de cámaras con sensores LiDAR, capacidades de video en 8K, y mejoras en batería para mayor duración. Además, su diseño ligero y resistente está pensado para la máxima comodidad y durabilidad.",  
    price: 1890000,
    stock: 12,
    category: "Smartphone",
  },
  {
    id: 17,
    name: "iPhone 16 Pro",
    marca: "iPhone16",
    image: "https://http2.mlstatic.com/D_NQ_NP_722374-MLA83783295621_042025-O.webp",
    description:
    "El iPhone 16 presenta una pantalla Super Retina XDR Pro de 6.1 pulgadas con tecnología ProMotion para una experiencia visual fluida. Equipado con el nuevo chip A17 Bionic que mejora significativamente el rendimiento y la eficiencia, incluye sistema avanzado de cámaras con sensores LiDAR, capacidades de video en 8K, y mejoras en batería para mayor duración. Además, su diseño ligero y resistente está pensado para la máxima comodidad y durabilidad.",  
    price: 2120000,
    stock: 12,
    category: "Smartphone",
  },
  {
    id: 18,
    name: "iPhone 16 Pro Max",
    marca: "iPhone16",
    image: "https://http2.mlstatic.com/D_NQ_NP_868139-MLU78878924204_092024-O.webp",
    description:
    "El iPhone 16 presenta una pantalla Super Retina XDR Pro de 6.1 pulgadas con tecnología ProMotion para una experiencia visual fluida. Equipado con el nuevo chip A17 Bionic que mejora significativamente el rendimiento y la eficiencia, incluye sistema avanzado de cámaras con sensores LiDAR, capacidades de video en 8K, y mejoras en batería para mayor duración. Además, su diseño ligero y resistente está pensado para la máxima comodidad y durabilidad.",  
    price: 2350000,
    stock: 12,
    category: "Smartphone",
  },
  {
    id: 19,
    name: "Motorola G75",
    marca: "Motorola",
    image: "https://http2.mlstatic.com/D_NQ_NP_656710-MLA82766197076_032025-O.webp",
    description:
    "El Motorola G75 combina rendimiento confiable con un diseño moderno. Equipado con una pantalla Full HD+ de 6.5 pulgadas, procesador octa-core y una batería de larga duración de 5000 mAh. Su sistema de triple cámara permite capturar fotos nítidas y vibrantes en cualquier condición. Ideal para quienes buscan un smartphone versátil a un precio accesible.",  
    price: 507091,
    stock: 16,
    category: "Smartphone",
  },
  {
    id: 20,
    name: "Moto Edge 50 Ultra",
    marca: "Motorola",
    image: "https://http2.mlstatic.com/D_NQ_NP_919051-MLU78507698475_082024-O.webp",
    description:
   "El Moto Edge 50 Ultra combina rendimiento extremo y diseño sofisticado. Cuenta con una pantalla pOLED de 6.7 pulgadas con resolución 1.5K y tasa de refresco de 144Hz. Potenciado por el procesador Snapdragon 8s Gen 3, ofrece 16 GB de RAM y 1 TB de almacenamiento. Su sistema de triple cámara liderado por un sensor de 50 MP con teleobjetivo periscópico y ultra gran angular captura fotos profesionales. Además, incluye carga inalámbrica y resistencia al agua IP68.",  
    price: 1599999,
    stock: 19,
    category: "Smartphone",
  },
  {
    id: 21,
    name: "Moto Edge 50 Pro",
    marca: "Motorola",
    image: "https://http2.mlstatic.com/D_NQ_NP_844351-MLA81161775331_122024-O.webp",
    description:
    "Smar",  
    price: 1049999,
    stock: 21,
    category: "Smartphone",
  },
  {
    id: 22,
    name: "Audifonos JBL Tune 720",
    marca: "Auriculares",
    image: "descrip",
    description:
    "Los audífonos JBL Tune 720BT ofrecen sonido Pure Bass JBL de alta calidad con conectividad Bluetooth 5.3 para una experiencia inalámbrica estable. Cuentan con hasta 76 horas de reproducción y carga rápida para disfrutar más música con menos espera. Su diseño liviano y almohadillas acolchadas garantizan comodidad durante todo el día, ideal para uso diario o viajes largos.",  
    price: 102374,
    stock: 35,
    category: "Auriculares",
  },
  {
    id: 23,
    name: "Auriculares Sony WF-C510",
    marca: "Auriculares",
    image: "https://http2.mlstatic.com/D_NQ_NP_794364-MLA80242609018_112024-O.webp",
    description:
    "Los auriculares Sony WF-C510 ofrecen un sonido nítido y potente con tecnología de audio de alta calidad. Equipados con conectividad Bluetooth, tienen un diseño compacto y ergonómico que garantiza comodidad durante todo el día. Con hasta 20 horas de autonomía con el estuche de carga y resistencia al agua IPX4, son ideales para el día a día y actividades deportivas.",  
    price: 107999,
    stock: 21,
    category: "Auriculares",
  },
  {
    id: 24,
    name: "Auriculares In Ear Indy",
    marca: "Auriculares",
    image: "descripcion",
    description:
    "Auriculares inalámbricos In Ear con diseño compacto y ergonómico para máxima comodidad. Equipados con tecnología Bluetooth 5.0 para una conexión estable y rápida, ofrecen sonido nítido y graves profundos. Cuentan con micrófono integrado para llamadas manos libres y controles táctiles para reproducir música, ajustar volumen y atender llamadas fácilmente. Batería de larga duración con estuche de carga portátil, ideal para usar todo el día sin interrupciones.",  
    price: 169955,
    stock: 29,
    category: "Auriculares",
  },
  {
    id: 25,
    name: "Fundas para iPhone 13/14/15",
    marca: "Fundas",
    image: "https://http2.mlstatic.com/D_NQ_NP_878612-MLA82709427623_022025-O.webp",
    description:
    "Fundas de silicona totalmente resistentes",  
    price: 12000,
    stock: 45,
    category: "Smartphone",
  },
  {
    id: 26,
    name: "Fundas para iPhone 16 antigolpes",
    marca: "Fundas",
    image: "https://http2.mlstatic.com/D_NQ_NP_982513-MLA83074881990_032025-O.webp",
    description:
    "Estas fundas de siliconas transparantes protejeran a tu smarphone de los golpes",  
    price: 8000,
    stock: 29,
    category: "Smartphone",
  },
  {
    id: 27,
    name: "Funda Spigen Ultra Hybrid",
    marca: "Fundas",
    image: "https://http2.mlstatic.com/D_NQ_NP_726693-MLA79481087001_092024-O.webp",
    description:
    "La funda Spigen Ultra Hybrid ofrece una protección superior con un diseño transparente que resalta la estética original del dispositivo. Su combinación de bordes de TPU flexible y parte trasera rígida de policarbonato proporciona resistencia a golpes y caídas. Cuenta con tecnología Air Cushion en las esquinas para mayor absorción de impactos y bordes elevados que protegen la pantalla y la cámara. Ideal para quienes buscan protección sin sacrificar el estilo.",  
    price: 1049999,
    stock: 21,
    category: "Smartphone",
  },

];

export default productsData;
