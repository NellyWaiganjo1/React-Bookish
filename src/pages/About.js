import aboutImg from '../app/assets/img/img/yoooh.avif';

const About = () => {
    return (
        <section className="about">
            <h1 className='text-center'>Bookish the number one online library</h1>   
        <div className="about-container">
        
            <div className="row">
                <div className="col-2 m-5 ">
                    <h1>Bookish</h1>
                </div>
                <div className="col-4 m-5">
                    <img src={aboutImg} alt="Bookish "/>
                </div>
                <div className="col-4 m-5">
                    <p>Welcome to Bookish, where book lovers dive deep into the ocean of literature to find their perfect genre.

                       Our shelves are filled with treasures waiting to be discovered. Get ready to embark on a reading journey like no other!

                       At Bookish, we believe in the magic of books to transport you to new worlds and ignite your imagination. Welcome to Bookish Book Store, where your literary dreams come true! Search for your favorite genre and dive into a sea of captivating books waiting to be explored.

                       </p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;


