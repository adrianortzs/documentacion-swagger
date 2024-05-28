module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"title for the task",
                        example:"go to the supermarket"
                    },
                    completed:{
                        type:'boolean',
                        description:"true or false",
                        example:"marked"
                    },
                    timestamps:{
                        type:'boolean',
                        description:"{createdAt: newDate(), updatedAt: newDate()}",
                        example:"true"
                    }
                }
            }
        }
    }
}
