import React from 'react'

const ClientFooter = () => {
  return (
    <footer>
      <div className="p-8 bg-[#053D29] grid grid-cols-4 h-80 gap-10">
        <div className="mt-10 ml-10 mr-20">
          <p className="text-justify text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua </p>
          <div className="flex gap-10 mt-10">
            <img src="img/Social.png" />
            <img src="img/lucide_youtube.png" />
            <img src="img/mdi_instagram.png" />
          </div>
        </div>
        <div className=" text-white">
          <p className="font-bold mb-5">Um</p>
          <div className="font-thin space-y-4">
            <p>Kontaktiere uns</p>
            <p>Über uns</p>
            <p>Karriere</p>
            <p>Unternehmensinformationen</p>
          </div>
        </div>
        <div className=" text-white">
          <p className="font-bold mb-5">Hilfe</p>
          <div className="font-thin  space-y-4">
            <p>Unsere Produzenten</p>
            <p>Zahlung</p>
            <p>Versand</p>
            <p>Stornierung &amp; Rückgabe</p>
            <p>Verstoß melden</p>
          </div>
        </div>
        <div className=" text-white">
          <p className="font-bold mb-5">politik</p>
          <div className="font-thin space-y-4 ">
            <p>Rücknahmegarantie</p>
            <p>Nutzungsbedingungen</p>
            <p>Sicherheit</p>
            <p>Privatsphäre</p>
            <p>Seitenverzeichnis</p>
          </div>
        </div>
      </div>
      <div className="p-8 bg-[#062F21] text-white text-center  flex justify-between">
        <p className="ml-10">© 2025 GardenShop. All rights reserved.</p>
        <img src="img/icons_payment 1.png" />
        <p className="mr-20">Scrol to top </p>
      </div>
    </footer>

  )
}

export default ClientFooter