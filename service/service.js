const getEmployees=(req,res)=>{
    res.status(200).json({message:"GET MESSAGE"});
}

const getEmployee=(req,res)=>{
    res.status(200).json({message:`GET MESSAGE ${req.params.id}`});
}

export { getEmployees,getEmployee}




