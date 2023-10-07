export default function ReviewCard({ image, text }) {
    return (
        <div>
            <div>
                <img src={image} alt="person-image" />
            </div>
            <div>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}