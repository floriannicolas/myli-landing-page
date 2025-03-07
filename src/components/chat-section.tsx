'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import CentralContainer from '@/components/ui/central-container';
import CentralMiniContainer from '@/components/ui/central-mini-container';
import ArrowLeft from '@/components/icons/arrow-left';
import ArrowRight from '@/components/icons/arrow-right';
import ChatBlock, { type ChatInfo } from '@/components/chat-slides/chat-block';
import { useRef } from 'react';

const chatsList: ChatInfo[] = [
  {
    client: {
      label: 'Joe & The Juice',
      image: '/images/chat/chat-joe-juice_002.webp',
      name: 'Salme Tran',
      position: 'Head of Customer Support'
    },
    clientColor: 'bg-[#eff2fe]',
    milyColor: 'bg-[#afb7f5]',
    messages: [
      {
        text: 'Hi Julie',
        author: 'client'
      },
      {
        text: 'Thanks for your quick help, as always',
        author: 'client'
      },
      {
        text: "You're welcome !",
        author: 'myli'
      }
    ]
  },
  {
    client: {
      label: 'Groupe Bagel Corner',
      image: '/images/chat/chat-bagel-corner_002.webp',
      name: 'Jean-Marc Desfougeres',
      position: 'Directeur Marketing & Com'
    },
    clientColor: 'bg-[#f5faf3]',
    milyColor: 'bg-[#a2cd92]',
    messages: [
      {
        text: 'Le soucis est réglé !',
        author: 'myli'
      },
      {
        text: 'Merci',
        author: 'client'
      },
      {
        text: 'Vous êtes des boss ✌️',
        author: 'client'
      },
      {
        text: 'Haha, merci Jean-Marc !',
        author: 'myli'
      }
    ]
  },
  {
    client: {
      label: 'Le Petit Vapoteur',
      image: '/images/chat/chat-petit-vapoteur_002.webp',
      name: 'Aude Blancho',
      position: 'Directrice Régionale'
    },
    clientColor: 'bg-[#f1f7fd]',
    milyColor: 'bg-[#8ec2ed]',
    messages: [
      {
        text: 'Merci, quelle efficacité',
        author: 'client'
      },
      {
        text: "Oui c'est bien ça et le problème n'est plus un problème !",
        author: 'client'
      },
      {
        text: 'Merci !',
        author: 'client'
      },
      {
        text: 'Avec plaisir !',
        author: 'myli'
      }
    ]
  },
  {
    client: {
      label: 'Boulangerie Ange',
      image: '/images/chat/chat-boulangerie-ange_002.webp',
      name: 'Morgan Mourat',
      position: 'Responsable Marketing Digital'
    },
    clientColor: 'bg-[#fff6ed]',
    milyColor: 'bg-[#faa96b]',
    messages: [
      {
        text: 'Tout est bon pour toi ?',
        author: 'myli'
      },
      {
        text: "C'est parfait !",
        author: 'client'
      },
      {
        text: "Merci encore pour ta réactivité. C'est top, tu nous sauves ! 😉",
        author: 'client'
      },
      {
        text: 'Merci encore pour tout',
        author: 'client'
      }
    ]
  },
  {
    client: {
      label: 'B&M France',
      image: '/images/chat/chat-b&m_002.webp',
      name: 'Remi Guittard',
      position: 'Chargé de Relation Client'
    },
    clientColor: 'bg-[#fbf7fd]',
    milyColor: 'bg-[#d3b3ea]',
    messages: [
      {
        text: 'Wahou Julie, déjà ???',
        author: 'client'
      },
      {
        text: 'Haha, et oui !',
        author: 'myli'
      }
    ]
  }
];

export default function ChatSection() {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section className="py-10 bg-linear-90 from-[#f1f7fd] to-[#fbf7fd]">
      <CentralContainer className="flex items-center justify-center">
        <CentralMiniContainer className="flex-1">
          <div className="flex justify-between">
            <div className="max-w-[560px]">
              <h2 className="mx-auto max-w-3xl text-[2rem] leading-[2.25rem] lg:text-[4rem] lg:leading-[4.25rem] tracking-[-.01em] font-medium">
                Notre secret ?<br />
                Ne jamais rien lâcher.
              </h2>
              <p className="mt-4">(Et nos clients nous en remercient)</p>
            </div>
            <div className="hidden lg:flex items-end justify-center gap-4">
              <div
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
                className="cursor-pointer rounded-full h-12 w-12 bg-[#171b26] transition-all hover:bg-[#ffce67] flex items-center justify-center group"
              >
                <ArrowLeft className="h-6 fill-[#fff] transition-all group-hover:fill-[#171b26]" />
              </div>
              <div
                onClick={() => {
                  swiperRef.current?.slideNext();
                }}
                className="cursor-pointer rounded-full h-12 w-12 bg-[#171b26] transition-all hover:bg-[#ffce67] flex items-center justify-center group"
              >
                <ArrowRight className="h-6 fill-[#fff] transition-all group-hover:fill-[#171b26]" />
              </div>
            </div>
          </div>
        </CentralMiniContainer>
      </CentralContainer>
      <div className="mt-6 lg:mt-12 overflow-hidden">
        <CentralMiniContainer>
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full h-full !overflow-visible"
            slidesPerView={'auto'}
            spaceBetween={16}
          >
            {chatsList.map((chatInfo) => (
              <SwiperSlide
                key={chatInfo.client.label}
                className="!w-[calc(.8333*100vw-.8333*16px*2+.8333*1rem)] md:!w-[calc(.5*100vw-.5*16px*2+.5*1rem)] lg:!w-[calc(.333*100vw-.333*16px*2+.333*1rem)] !h-auto"
              >
                <ChatBlock chatInfo={chatInfo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CentralMiniContainer>
      </div>
    </section>
  );
}
