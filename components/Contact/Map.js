import Cta from "../Homepage/Cta"

const Map = () => {

    return (
        <>
            <div className="map-section">
                <div className="map-iframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509916.957423575!2d-123.79759793610344!3d37.18430344877116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1607552912782!5m2!1sen!2sbd"></iframe>
                </div>
            </div>
            <Cta />
        </>
    )
}

export default Map