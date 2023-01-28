import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export const links = [
  {
    title: 'About Us',
    links: [
      {
        label: 'Company Profile',
        href: '#',
      },
      {
        label: 'History',
        href: '#',
      },
      {
        label: 'Vision and Mission',
        href: '#',
      },
      {
        label: 'Our Team',
        href: '#',
      },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        label: 'Creative Service',
        href: '#',
      },
      {
        label: 'Studio Service',
        href: '#',
      },
      {
        label: 'Zoom Service',
        href: '#',
      },
    ],
  },
  {
    title: 'Projects',
    links: [
      {
        label: 'Our Recent Projects',
        href: '#',
      },
      {
        label: 'Creative Projects',
        href: '#',
      },
      {
        label: 'Studio Projects',
        href: '#',
      },
      {
        label: 'Zoom Projects',
        href: '#',
      },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      {
        label: 'Email Us',
        href: '#',
      },
    ],
  },
]
export const socialLinks = [
  {
    label: 'Whatsapp',
    icon: <FaWhatsapp />,
    href: '#',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram />,
    href: '#',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    href: '#',
  },
  {
    label: 'Twitter',
    icon: <FaTwitter />,
    href: '#',
  },
]