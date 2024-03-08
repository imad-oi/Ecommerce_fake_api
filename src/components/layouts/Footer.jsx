import { FaFacebook } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const socialMediaList = [
  { name: 'Facebook', icon: <FaFacebook size={24} /> },
  { name: 'Instagram', icon: <FaInstagramSquare size={24} /> },
  { name: 'Twitter', icon: <FaTwitter size={24} /> }
]

export const Footer = () => {
  return (
    <footer className='flex items-center justify-between px-14 bg-black-100 text-white-100 py-4'>
      <div>
        <h1 className="text-h3">CORAL</h1>
      </div>
      <div>
        <nav>
          <ul className="flex justify-center items-center gap-3">
            {socialMediaList.map(socialMedia => (
              <li key={socialMedia.name}>
                <a href={socialMedia.link}>{socialMedia.icon}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
