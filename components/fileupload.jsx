import React from 'react';

class File extends React.Component{
    constructor(props){
        super(props);
        this.state={
            file:''
        }
    }

    handleClick=(e)=>{
        e.preventDefault();
        var url="http://localhost:3000/upload";
        const formdata=new FormData();
        formdata.append('file',this.state.file);
        var data={
            method:'post',
            body:formdata,
            mode:'cors'
        }
        fetch(url,data).then((res)=>{
            return res.json();
        }).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log("There is an error in uploading an image.",err);
        })
    }

    onchange=(e)=>{
        this.setState({
            file:e.target.files[0]
        })
    }

    render(){
        return(
            <div>
                <form encType={'multipart/form-data'}>
                    <div className={'col-sm-4 offset-4 form-group'}>
                        <input className={'form-control'} type={'file'} onChange={this.onchange}/>
                    </div>
                    <button className={'btn btn-dark'} onClick={this.handleClick}>Upload</button>
                </form>
            </div>
        )
    }
}
export default File;