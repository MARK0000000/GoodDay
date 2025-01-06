import React, { useContext } from 'react';
import PosterCard from './PosterCard';
import { NavigateContext } from '../../context/Navigate';
import { SkeletonPosterCard } from '../../components/UI/loaders/SkeletopPosterCard';
import { PosterCategoriesContext } from '../../context/PosterCategories';

export default function PostersCategory({ data, title, link, id, isLoading }) {
    const { typeButtonClick } = useContext(NavigateContext);
    const { selectCategory } = useContext(PosterCategoriesContext);
    const categoryHandleNavigate = (link) => {
        selectCategory(link)
        typeButtonClick("posters/" + link, "posters/" + link)
    }
    return (
        <>
            {!(!(data && data.length > 0) && !isLoading) &&
                <section className="postersCategory" id={id}>
                    <h2
                        className={`postersCategory__title ${link && 'postersCategory__title_link'}`}
                        onClick={() => categoryHandleNavigate(link)}
                    >
                        {title}
                    </h2>
                    <div className="postersCategory__content">
                        {isLoading ? (
                            [...Array(6)].map((_, index) => (
                                <SkeletonPosterCard key={index} />
                            ))
                        ) : (
                            data && data.length > 0 && (
                                data.map((item, index) => (
                                    <PosterCard key={index} data={item} />
                                ))
                            )
                        )}
                    </div>
                </section>
            }
        </>
    );
}