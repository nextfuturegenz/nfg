

export const Card = ({ header, title, description, children, defaultValue = true, buttonText, onClick , customStyle }) => {

    return (
        <div style={customStyle}>
            <div className="card">
                <h5 className="card-header">{header}</h5>
                <div className="card-body" style={{ display : 'block' }} >
                    {defaultValue ?
                        <div>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <button onClick={onClick} className="btn btn-primary">{buttonText}</button>
                        </div>
                        :
                        children
                    }
                </div>
            </div>
        </div>
    )
}