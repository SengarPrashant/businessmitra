import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faComments } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import styles from '../../styles/post.module.scss';

const BlogList = ({ data }) => {
    const [postList, setPostList] = useState([]);
    const router = useRouter();
    const imagebuilder = imageUrlBuilder({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: 'production'
    });
    useEffect(() => {
        if (data.length) {
            let list = data[0].posts;
            list.length= list.length > 4 ? 4 : list.length;
            setPostList(list);
        }
    }, [])
    return (
        <>
            <Card.Title>
                Latest OPC discussions
                <span className='viewMore ml-2'  onClick={() => router.push(`/post`)}>
                    View other posts <FontAwesomeIcon icon={faArrowRight} className='icon16' />
                </span>
            </Card.Title>
            <Row className='mb-4'>
                {postList.length ? postList.map((post, i) => {
                    return <>
                        <Col key={i} sm={12} md={6} lg={4} onClick={() => router.push(`/post/${post.slug.current}`)}>
                            <Card className={styles.cardImg}>
                                <img height='300px' className={[styles.blogImgList].join(' ')} src={imagebuilder.image(post.mainImage)} />
                                <div className={styles.blogOverLay}>
                                    <h3>{post.title}</h3>
                                    <h6>
                                        {moment(post._createdAt).format('DD-MMM-yyyy')}
                                    </h6>
                                    <h6>
                                        <FontAwesomeIcon icon={faComments} className='icon16' /> {post.comments.length} comments
                                    </h6>
                                </div>
                            </Card>
                        </Col>
                    </>
                }) : <h5>No posts yet..</h5>}

            </Row>
        </>
    )
}

export default BlogList;