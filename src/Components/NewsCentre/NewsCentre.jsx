import './NewsCentre.css'
import { announcementsInfo, postsInfo } from './newsData.jsx'
const NewsCentre = () => {
  return (
    <section className='news-container'>
      <div>
          <hr className='news-hr'/>
          <h4>Recent Posts</h4>
          <div className='posts-main-div'>
              {
                postsInfo.map((post)=> {
                  const {id, image, title, date, icon } = post
                  return (
                    <article key={id} className='posts-article'>
                        <img src={image} alt="title" className='post-img' />
                        <div className="">
                          <p className='post-title'>{title}</p>
                          <p className='post-timing'>
                            {icon}
                            Posted on: <span>{date}</span>
                          </p>
                        </div>
                    </article>
                  )
                })
              }
          </div>
      </div>
      <div className='announcements-container'>
          <hr className='news-hr2'/>
          <h4>Recent Announcements</h4>
          <div className="announcements-main-div">
              {
                announcementsInfo.map((announce)=> {
                  const {id, image, title, icon, pdf, date} = announce
                  return(
                    <article key={id}>
                      
                    </article>
                  )
                })
              }
          </div>
      </div>
      <div>
      <hr className='news-hr3'/>
        <h4>Document Center</h4>
      </div>
    </section>
  )
}

export default NewsCentre
