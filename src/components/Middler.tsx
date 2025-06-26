import { FaTools, FaHome, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    icon: <FaCheckCircle className="text-yellow-500 text-4xl" />,
    title: 'Why Choose Mobicures for Your Device Repairs?',
    description:
      'At Mobicures, we redefine electronics repair with unmatched professionalism. We use only 100% genuine parts, offer free doorstep service, and back our work with up to 12 months warranty. Our certified technicians ensure your devices are restored to optimal performance with minimal downtime. Trust Mobicures for fast, reliable, and secure repairs—delivered at your convenience.',
  },
  {
    icon: <FaHome className="text-sky-500 text-4xl" />,
    title: 'We Fix Devices. We Earn Trust.',
    description:
      'We know how important your device is to you—and we treat it like our own. From authentic spare parts to friendly doorstep service, we make sure your repair experience is smooth, stress-free, and reliable. With skilled professionals and long-term warranty, you are re not just fixing a gadget—you’re gaining peace of mind.',
  },
  {
    icon: <FaShieldAlt className="text-green-500 text-4xl" />,
    title: '6-12 Months Warranty',
    description:
      'At Mobicures, we assure 6 to 12 months warranty on used screens and other parts.',
  },
  {
    icon: <FaTools className="text-gray-600 text-4xl" />,
    title: 'Best Electronics Repair Services in India – Fast, Trusted & Guaranteed',
    description:
      'Looking for trusted mobile, tablet, or laptop repair services near you? At Mobicures, we offer 100% original parts, expert technicians, and doorstep device repair services across India. Enjoy 6–12 months warranty on all major repairs, including screen and battery replacements. With fast service and no hidden costs, we’re India’s most reliable repair brand.',
  },
];
const devices = [
  { name: "Mobile Repair", src: "https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80" },
  { name: "iPad Repair", src: "https://i.pinimg.com/736x/1a/e3/b3/1ae3b3bcf0dce223c0f8a987f22c1c1f.jpg" },
  { name: "Apple Watch Repair", src: "https://i.pinimg.com/736x/20/29/d5/2029d51d3f51b028d6f0d4b7bab3c44d.jpg" },
  { name: "MacBook Repair", src: "https://i.pinimg.com/736x/eb/b3/5d/ebb35d9572ffff815578498fcf59cbbb.jpg" },
  { name: "Tablet Repair", src: "https://i.pinimg.com/736x/38/25/45/382545c1ad207592a40956808ae3c1e5.jpg" },
  { name: "Tempered Glass", src: "https://i.pinimg.com/736x/74/63/bb/7463bb5260270fd6b1244392735bd631.jpg" },
];
export default function FacilitiesSection() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        WHY TO CHOOSE US
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
        
      <div className="text-center py-16 px-4 md:px-20">
    <h2 className="text-3xl font-semibold tracking-wide uppercase text-gray-800">
      Our Premium Repair Solutions
    </h2>
    <div className="mt-2 w-16 h-1 mx-auto bg-blue-500 rounded-full" />
    <p className="mt-4 text-gray-600 text-sm md:text-base">
      Our expert technicians are ready to serve you anytime, anywhere. Book an appointment now!
    </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 mt-0 md:grid-cols-4 gap-6 px-6 md:px-20">
    {devices.map((device) => (
      <div
        key={device.name}
        className="bg-white shadow-md hover:shadow-xl transition-all rounded-xl p-6 text-center"
      >
        <img
          src={device.src}
          alt={device.name}
          className="h-24 mx-auto mb-4"
        />
        <p className="text-lg font-medium text-gray-800">{device.name}</p>
      </div>
    ))}
  </div>
    </section>

  );
}
