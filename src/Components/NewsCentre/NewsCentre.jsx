import './NewsCentre.css'
import { announcementsInfo, documentsInfo, postsInfo } from './newsData.jsx'
const NewsCentre = () => {
  return (
    <section className='news-container'>
      <div>
          <hr className='news-hr'/>
          <h4 className='main-head'>Recent Posts</h4>
          <div className='posts-main-div'>
              {
                postsInfo.map((post)=> {
                  const {id, image, title, date, link, icon } = post
                  return (
                    <article key={id} className='posts-article'>
                        <img src={image} alt="title" className='post-img' />
                        <div>
                          <a href={link} className='post-title'>{title}</a>
                          <p className='post-timing'>
                            {icon}
                            Posted on: <span className='date'>{date}</span>
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
          <h4 className='main-head'>Recent Announcements</h4>
          <div className="announcements-main-div">
              {
                announcementsInfo.map((announce)=> {
                  const {id, image, title, icon, pdf, date} = announce
                  return(
                    <article key={id} className='announcements-article'>
                      <img src={image} alt={title} className='announcement-img' />
                      <div>
                        <p className='announcement-title'>{title}</p>
                        <div className='announcement-info'>
                          <p className='icon-and-date'>
                            {icon}
                            {date}
                          </p>
                          <span className="separator"></span>
                          <p className='pdf-link'>
                            {pdf}
                            <a href="#">
                              Download
                            </a>
                          </p>
                        </div>
                      </div>
                    </article>
                  )
                })
              }
          </div>
      </div>
      <div>
          <hr className='news-hr3'/>
          <h4 className='main-head'>Document Center</h4>
          <div className="docs-main-div">
            {
              documentsInfo.map((doc)=> {
                const {id, title, pdf, link} = doc
                return(
                  <article key={id} className='docs-article'>
                    {pdf}
                    <a href={link} className='document-link'>{title}</a>
                  </article>
                )
              })
            }
          </div>
      </div>
    </section>
  )
}

export default NewsCentre
