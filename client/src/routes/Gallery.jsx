import NavBar from '../components/navbar';
import '../stylesheets/gallery.css'
function Gallery() {
    const list = ['CbR67HXN4Pg','CbQF_OaqNqc', 'CbM01NOocfm', 'CbMj4j_ImpZ', 'CbC5SxcPgxW', 'CarB9lrodkT', 'CaM_T5BPWdM', 'CY0a2B4lFsT', 'CU1rOHZlaBA', 'CUt33ndIic_', 'CUsNkgdF8MF', 'CTY_R46ISst', 'CTYs9X7IPcn', 'CTYrz6fIWN9', 'CTYpURaI0cm'];
    return (
        <div>
            <NavBar page='Gallery' />
            <h1 className='gallery-h1'>Photos</h1>
            <div className='Photos'>
                <div className='Photos--container'>
                    <div className='Photos--bucket'>
                        {
                            list.map((_, i) =>
                                <a href='https://www.instagram.com/microsoft.sist/'>
                                    {
                                    //    <iframe src={"https://www.instagram.com/p/"+_+"/embed"} width="400" height="480" frameborder="0" allowtransparency="true"></iframe>
                                    }
                                    <img src="https://i.ibb.co/FhxDbTG/vaathi.jpg" alt="profile" srcset="" width={'300px'} height={'300px'}/>
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