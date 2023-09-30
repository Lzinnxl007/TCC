'use client'

import { useState } from "react"
import { X } from "lucide-react"
import Cookies from "js-cookie"
import { UploadProfileImageAction } from "@/utils/auth/UploadProfileImageAction"
import { GetUserAction } from "@/utils/GetUserAction"

export default function SetProfileImage({ show, closeSelectImage }) {
    const [selectedImage, setSeletedImage] = useState(null)
    const [previewImage, setPreviewImage] = useState('')

    const selectImage = (e) => {
        const file = e.target.files[0]

        if(file && isImageFile(file)) {
            setSeletedImage(file)

            const reader = new FileReader()

            reader.onload = () => {
                setPreviewImage(reader.result)
            }

            reader.readAsDataURL(file)
        } else {
            alert('Selecione uma imagem valida!')
        }
        
    }


    const isImageFile = (file) => {
        const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif']
        return file && acceptedImageTypes.includes(file.type)
    }

    const handleUpload = async() => {
        if(selectedImage) {
        
            const formData = new FormData()
            formData.append('file', selectedImage)
            formData.append('upload_preset', 'profile-image')
            try {
                const response = await fetch(
                    `https://api.cloudinary.com/v1_1/devsiaq93/image/upload`,
                    {
                    method: 'POST',
                    body: formData,
                    }
                )
                const data = await response.json()
                
                if(Cookies.get('token')) {
                    const user = JSON.parse(Cookies.get('user'))

                    await UploadProfileImageAction(user.id, data.secure_url)

                    const userByDB = await GetUserAction(user.id)

                    Cookies.set('user', JSON.stringify(userByDB))
                }

                closeSelectImage()

              } catch (error) {
                console.log('Erro ao fazer a solicitação de upload:', error)
              }
        }
    }

    return (
        <div>
            {show && (
                <div className="p-8 rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-[var(--orange)] dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 h-auto">
    
                    <button onClick={closeSelectImage}
                    className="absolute top-3 left-3">
                        <X size={20} />
                    </button>
    
                    <h1 className="font-bold my-4 text-center text-3xl">
                        Selecionar Imagem
                    </h1>
                    <div className="mt-8">
                        <input type="file" 
                        name="profile-image"
                        accept=".jpg, .jpeg, .png"
                        onChange={e => selectImage(e)}/>
                    </div>
                    {previewImage && (
                        <div className="rounded-lg border-solid border-2 border-zinc-900 dark:border-zinc-50 overflow-hidden mx-auto w-full max-w-sm aspect-[4/3] mt-6">
                            <img src={previewImage} alt="preview-image" 
                            className="w-full h-full object-cover"/>
                        </div>
                    )}
                    <button onClick={handleUpload}
                    disabled={!previewImage}
                    className="w-full py-1.5 font-medium text-zinc-50 bg-orange-400 disabled:opacity-40 transition hover:opacity-90 rounded mt-4">
                        Salvar
                    </button>
                </div>
            )}
        </div>
    )
}