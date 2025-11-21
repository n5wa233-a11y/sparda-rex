export default function handler(req,res){
  const manga = [
    {id:'one-piece',title:'One Piece'},
    {id:'naruto',title:'Naruto'},
    {id:'chainsaw-man',title:'Chainsaw Man'}
  ]
  res.status(200).json({manga})
}
