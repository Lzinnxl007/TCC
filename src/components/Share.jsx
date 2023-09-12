'use client'

import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'next-share'

export default function Share({ param }) {
    return (
        <div className="flex items-center gap-4">
            <FacebookShareButton
            url={`https://desperdiciozero.vercel.app/receita/${param}`}
            quote={'Compartilhando uma receita deliciosa e saudável para nutrir o corpo e a alma!'}
            hashtag={'#desperdiciozero'}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>

            <WhatsappShareButton
            url={`https://desperdiciozero.vercel.app/receita/${param}`}
            title={'Compartilhando uma receita deliciosa e saudável para nutrir o corpo e a alma!'}
            separator=":: ">
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
        </div>
    )
}