'use client'

import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'next-share'

export default function Share({ param }) {
    return (
        <div className="flex items-center gap-4 bg-zinc-900 float-left mt-4 mr-4">
            <FacebookShareButton
            url={`https://desperdiciozero.vercel.app/receita/${param}`}
            quote={'Compartilhando uma receita deliciosa e saudável para nutrir o corpo e a alma!'}
            hashtag={'#desperdiciozero'}>
                <FacebookIcon size={24} round />
            </FacebookShareButton>

            <WhatsappShareButton
            url={`https://desperdiciozero.vercel.app/receita/${param}`}
            title={'Compartilhando uma receita deliciosa e saudável para nutrir o corpo e a alma!'}
            separator=":: ">
                <WhatsappIcon size={24} round />
            </WhatsappShareButton>

            <TwitterShareButton
            url={`https://desperdiciozero.vercel.app/receita/${param}`}
            title={'Compartilhando uma receita deliciosa e saudável para nutrir o corpo e a alma!'}>
                <TwitterIcon size={24} round />
            </TwitterShareButton>
        </div>
    )
}