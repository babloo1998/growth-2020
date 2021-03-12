import React from 'react';
import Timeline from '../timeline-module';
import './style.scss';

export default class Root extends React.Component{

    state = {
        // Data : [
        //     {
        //       Title: 'Babloo Mishra',
        //       subTitle: 'He is a good guy',
        //       detail: 'great person',
        //       date: '02/01/1998'
        //     },
        //     {
        //       Title: 'Babloo Mishra',
        //       subTitle: 'He is a good guy',
        //       detail: 'great person',
        //       date: '02/01/1998'
        //     },
        //     {
        //       Title: 'Babloo Mishra',
        //       subTitle: 'He is a good guy',
        //       detail: 'great person',
        //       date: '02/01/1998'
        //     },
        //     {
        //       Title: 'Babloo Mishra',
        //       subTitle: 'He is a good guy',
        //       detail: 'great person',
        //       date: '02/01/1998'
        //     },
        //     {
        //       Title: 'Babloo Mishra',
        //       subTitle: 'He is a good guy',
        //       detail: 'great person',
        //       date: '02/01/1998'
        //     },
        //     {
        //       Title: 'Babloo Mishra',
        //       subTitle: 'He is a good guy',
        //       detail: 'great person',
        //       date: '02/01/1998'
        //     },
        //     {
        //       Title: 'Babloo Mishra',
        //       subTitle: 'He is a good guy',
        //       detail: 'great person',
        //       date: '02/01/1998'
        //     }
        //   ]
    }

    openCamera = () =>{
        this.props.history.push('/home')
    };

    // handleCallback = (dataFromChild) =>{
    //     console.log('%%^^^^^^^',dataFromChild);
    // }

    render(){
        return(
            <div className ='Root'>
                <button onClick ={this.openCamera} className='start-camera'>Take Snap</button>
            </div>
        )
    }
}