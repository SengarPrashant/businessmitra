
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styles from '../../../styles/post.module.scss';
import { FormText, Badge, Row, Col, Image } from 'react-bootstrap';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faArrowLeft, faComments } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const SinglePost = (props) => {
    const [imageUrl, setImageUrl] = useState('');
    const router = useRouter();
    useEffect(() => {
        let imagebuilder = imageUrlBuilder({
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
            dataset: 'production'
        })
        setImageUrl(imagebuilder.image(props.data.mainImage));
        window.scrollTo(0,0);
    }, []);

    const goBack=()=>{
        window.scrollTo(0,0);
        router.back();
    }

    return <>
        <div className={styles.blogContainer}>
            <Row className='mb-3'>
                <Col sm={12}>
                    <h1>{props.data.title}</h1>
                </Col>
                <Col sm={9}>
                    <span className='small'>Post date: </span>
                    <Badge pill bg="primary" className='bg-primary text-light'>
                        {moment(props.data._createdAt.replace('T', ' ').replace('Z', '')).format('DD-MMM-yyyy')}
                    </Badge>
                </Col>
                <Col sm={3} className='text-right'>
                    <Badge pill bg="primary" onClick={goBack} className='bg-primary hover text-light'>
                        <FontAwesomeIcon icon={faArrowLeft} className='icon16' /> Go back
                    </Badge>
                </Col>
            </Row>
            {imageUrl && <img className={[styles.blogImg, 'mb-3'].join(' ')} src={imageUrl} />}
            <BlockContent blocks={props.data.body} className='mb-5 text-justify' />
            {props.data.comments && props.data.comments.map((comment, i) => {
                return <div key={i} className='p-3 mb-3 bg-light rounded'>
                    <Row>
                        <Col sm={12} md={8}>
                            <FontAwesomeIcon icon={faUserCircle} className='icon32 mr-2 text-primary' />{comment.username}
                        </Col>

                        <Col sm={12} className="text-muted mt-2 pl-3 text-justify">
                            <div style={{paddingLeft:40}}>{comment.text}</div>
                        </Col>
                        <Col sm={12} md={12} className='text-md-right text-right pl-sm-4'>
                            <FontAwesomeIcon icon={faComments} className='icon16 text-primary' />
                            <Badge className='text-muted'>
                                {moment(comment._createdAt.replace('', '').replace('', '')).format('DD-MMM-yyyy hh:mm a')}
                            </Badge>
                        </Col>
                    </Row>
                </div>
            })}
        </div>
    </>
}

export default SinglePost;