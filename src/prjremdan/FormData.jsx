import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddDATA } from './Slice/Slices';


function FormData() {
    var a =  new Date();
    var year = a.getFullYear();
    var month = a.getMonth() +1
    var day = (a.getDate())
    var formattedDate = year + '-' + month + '-' + day;

    const [errors , setErrors]= useState([])
    const refPrayers = useRef();
    const refHizebMemorized = useRef()
    const refSoraaMemorized = useRef()
    const refHizebReaded = useRef()




    const dispatch = useDispatch()
    const onSubmit = () => {
   
        
        const Prayers = refPrayers.current.value
        const HizebMemorized = refHizebMemorized.current.value
        const SoraaMemorized = refSoraaMemorized.current.value
        const HizebReaded = refHizebReaded.current.value
        
        dispatch(AddDATA({
            Day: formattedDate ,
            Prayer: Prayers,
            Hizeb_Memorized: HizebMemorized,
            Soraa_Memorized: SoraaMemorized,
            Hizeb_Readed: HizebReaded,
        }))
        refPrayers.current.value = ""
        refHizebMemorized.current.value = ""
        refSoraaMemorized.current.value = ""
        refHizebReaded.current.value = ""

    }
    const HandelError = ()=>{
           if (refPrayers.current.value > 5 || refPrayers.current.value.trim()===''  ) {
            setErrors(prevState => {
                return [...prevState, 'you should inser just 5 prayers ']
            })
           }else{
            onSubmit()
            setErrors([])
           }
          
    }
    return (<>
       {errors.length > 0 ?
                        <div className='alert alert-danger '>
                            <strong>errors !</strong>
                            <ul>
                                {errors.map((error, key) => <li key={key} > {error} </li>)}
                            </ul>
                        </div>

                        : ''}
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <form className="form" >
                            <fieldset>
                                <legend className="text-xs-center header p-10" style={{ color: '#36A0FF', fontSize: 27 + "px", }} >Statics </legend>

                                <div className="form-group py-1">
                                    <span className="col-md-1 offset-md-2 text-xs-center"><i className="fa fa-user bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="fname" name="Prayers" type="number" ref={refPrayers} autoComplete='off' placeholder="Prayers in Masjid" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group py-1">
                                    <span className="col-md-1 offset-md-2 text-xs-center"><i className="fa fa-user bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="lname" name="Hizb" type="number" ref={refHizebMemorized} placeholder="Hizeb Memorized" autoComplete='off' className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group py-1">
                                    <span className="col-md-1 offset-md-2 text-xs-center"><i className="fa fa-user bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="lname" name="Hizb" type="number" autoComplete='off' ref={refSoraaMemorized} placeholder="Soraa Memorized" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group py-1">
                                    <span className="col-md-1 offset-md-2 text-xs-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="Hizeb" name="Hizeb" type="text" autoComplete='off' ref={refHizebReaded} placeholder="Hizeb readed" className="form-control" />
                                    </div>
                                </div>


                                <div className="form-group py-1 d-flex justify-content-center align-items-center">
                                    <div className="col-md-12 text-xs-center">
                                        <button type="button" className="btn btn-primary btn-lg " onClick={HandelError}>Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </>


    )
}

export default FormData