export const NewsItem = ({title, author, description,url}) => {

    return (
        <>
        <div className="cardNews">
            <p>{title}</p>
            <p>{author}</p>
            <p>{description}</p>
            <p>{url}</p>
        </div>
        </>
    )
}