import NavBar from '../components/navbar';
import '../stylesheets/gallery.css'
function Gallery() {
    return(
        <div>
            <NavBar page='Gallery' />
            <h1 className='gallery-h1'>Photos</h1>
            <div className='Photos'>
                <div className='Photos--container'>
                    <div className='Photos--bucket'>
                    {
                            [1,2,3,4,5,6,7,8,7,8,9,10].map((_, i) =>
                            <a href='https://www.instagram.com/microsoft.sist/'>
                                <img src="https://avatars.githubusercontent.com/u/58457318?s=200&v=4" alt="profile" srcset="" width={'300px'} height={'300px'}/>
                            </a>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;