import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/9971255037"
            target="_blank"
            className="
        fixed
        bottom-6
        right-6
        w-16
        h-16
        rounded-full
        bg-green-500
        flex items-center justify-center
        text-3xl
        shadow-lg
        z-50
        hover:scale-110
        transition
      "
        >
            <FaWhatsapp />
        </a>
    )
}