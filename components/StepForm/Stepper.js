import React,{useState,useEffect} from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const Stepper = ({ steps }) => {

    const [currentStep,setCurrentStep]=useState(0);
    const [stepForms,setStepForms]=useState([]);
    useEffect(()=>{
        let  _stepForms = [
            { stepComponent: <h1>step 1 form</h1>, nextCallback: () => { } },
            { stepComponent: <h1>step 2 form</h1>, nextCallback: () => { } },
            { stepComponent: <h1>step 3 form</h1>, nextCallback: () => { } },
            { stepComponent: <h1>step 4 form</h1>, nextCallback: () => { } },
            { stepComponent: <h1>step 5 form</h1>, nextCallback: () => { } },
            { stepComponent: <h1>step 6 form</h1>, nextCallback: () => { } }
        ];
        _stepForms.map(x=>x.completed=false);
        setStepForms(_stepForms);
    },[])

   const onNextClick=()=>{
      debugger
        let temp=JSON.parse(JSON.stringify(stepForms));
        temp[currentStep].completed=true;
        setStepForms(temp);
        setCurrentStep(currentStep+1);
    }

    const onPrevClick=()=>{
        debugger
          let temp=JSON.parse(JSON.stringify(stepForms));
          temp[currentStep-1].completed=false;
          setStepForms(temp);
          setCurrentStep(currentStep-1);
      }
   

    const stepSuccessCallBack=(params)=>{
        
    }
    

    return (
        <div>
            <Card>
                <Card.Body>
                    <div className='stepper'>
                        {stepForms.length>0 && stepForms.map((item, i) => {
                            return <>
                                <div key={i} className={`${item.completed ? 'bg-success' : 'bg-warning'}  shadow-sm stepNumber`}  >{i + 1}</div>
                                {
                                    i < stepForms.length - 1 && <div className={`stepLine`} ></div>
                                }
                            </>

                        })}
                        {/* <div className='bg-warning shadow-sm stepNumber' >1</div>
                        <div className='stepLine' ></div>
                        <div className='bg-warning shadow-sm stepNumber' >2</div>
                        <div className='stepLine' ></div>
                        <div className='bg-success shadow-sm stepNumber' >3</div>
                        <div className='stepLine' ></div>
                        <div className='bg-success shadow-sm stepNumber' >4</div> */}
                    </div>
                    <div>
                        {stepForms.length>0 && JSON.stringify(stepForms[currentStep]['stepComponent'])}
                        {
                            stepForms.length>0 && stepForms[currentStep] &&
                            React.createElement(stepForms[currentStep].stepComponent.type,
                                stepForms[currentStep].stepComponent.props,stepForms[currentStep].stepComponent.props.children)
                        }
                    </div>
                    <Row className="mt-4">
                        <Col sm={12} className='text-right'>
                            <Button disabled={currentStep===0} onClick={onPrevClick}>Previous</Button>
                            <Button className="ml-3" disabled={currentStep===stepForms.length-1} onClick={onNextClick} >Next</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Stepper;