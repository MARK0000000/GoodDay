import React, {useState} from 'react'
import img1 from '../../images/other/парикмахерскиеуслуги.jpg'
import img2 from '../../images/other/ресницы.jpg'
import img3 from '../../images/other/барбершоп.jpg'
import img4 from '../../images/other/косметология,уход.jpg'
import img5 from '../../images/other/татуаж,тату.jpg'
import img6 from '../../images/other/массаж.jpeg'
import img7 from '../../images/other/ногтевой,сервис.jpg'
import img8 from '../../images/other/депиляция.jpg'
import img9 from '../../images/other/брови.jpg'
import img10 from '../../images/other/визаж.jpg'
import img11 from '../../images/other/усыборода.jpg'
import img12 from '../../images/other/спа.jpeg'

export default function Categories() {
    const [categories, setCategories] = useState([
        { id: 1, text: 'Парихмахерские услуги', img: img1 },
        { id: 2, text: 'Ресницы', img: img2 },
        { id: 3, text: 'Барбершоп', img: img3 },
        { id: 4, text: 'Косметология, уход', img: img4 },
        { id: 5, text: 'Татуаж, тату', img: img5 },
        { id: 6, text: 'Массаж', img: img6 },
        { id: 67, text: 'Ногтевой сервис', img: img7 },
        { id: 8, text: 'Депиляция, эпиляция', img: img8 },
        { id: 9, text: 'Брови', img: img9 },
        { id: 10, text: 'Визаж', img: img10 },
        { id: 11, text: 'Усы, борода', img: img11 },
        { id: 12, text: 'СПА', img: img12 },
    ]);
    const [clickedIndexes, setClickedIndexes] = useState([]);
    const [activeCategory, setActiveCategory] = useState(1);

    const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    };

  return (
    <section className="categories">
        <h2 className="categories__title">Категории</h2>
        <div className="categories__items">
        {categories.map((category, index) => (
            <div
                key={category.id}
                className={`categories__item ${activeCategory === category.id ? 'categories__item_active' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
            >   
                <div className="categories__grayBack"></div>
                <img src={category.img} className='categories__img' />
                <span className="categories__text">{category.text}</span>
            </div>
        ))}
        </div>
    </section>
  )
}
