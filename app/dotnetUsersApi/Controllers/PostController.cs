using DotnetAPI.Data;
using DotnetAPI.Dtos;
using DotnetAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DotnetAPI.Controllers
{
    // [Authorize]
    [ApiController]
    [Route("[Controller]")]
    public class PostController : ControllerBase
    {
        private readonly DataContextDapper _dapper;

        public PostController(IConfiguration config)
        {
            _dapper = new DataContextDapper(config);
        }

        [HttpGet("Posts")]
        public IEnumerable<Post> GetPosts()
        {
            string sql = @"SELECT [PostId],
                [UserId],
                [PostTitle],
                [PostContent],
                [PostCreated],
                [PostUpdated] FROM  TutorialAppSchema.Posts";

            return _dapper.LoadData<Post>(sql);
        }

        [HttpGet("PostSingle/{postId}")]
        public Post GetPostSingle(int postId)
        {
            string sql = @"SELECT [PostId],
                [UserId],
                [PostTitle],
                [PostContent],
                [PostCreated],
                [PostUpdated] FROM  TutorialAppSchema.Posts
                WHERE PostId = " + postId.ToString();

            return _dapper.LoadDataSingle<Post>(sql);
        }

        [HttpGet("PostsByUser/{userId}")]
        public IEnumerable<Post> GetPostsByUser(int userId)
        {
            string sql = @"SELECT [PostId],
                [UserId],
                [PostTitle],
                [PostContent],
                [PostCreated],
                [PostUpdated] FROM  TutorialAppSchema.Posts
                WHERE UserId = " + userId.ToString();

            return _dapper.LoadData<Post>(sql);
        }

        [HttpGet("MyPosts")]
        public IEnumerable<Post> GetMyPost()
        {
            //obtenemos el user del token para ello la clase tiene que heredar de ControllerBase
            //para ser más explícito de donde queremos obtener la propiedad User usamos this haciendo referencia de esta clase
            string sql = @"SELECT [PostId],
                [UserId],
                [PostTitle],
                [PostContent],
                [PostCreated],
                [PostUpdated] FROM  TutorialAppSchema.Posts
                WHERE UserId = " + this.User.FindFirst("userId")?.Value;

            return _dapper.LoadData<Post>(sql);
        }

        [HttpPost("Post")]
        public IActionResult AddPost(PostToAddDto postToAdd)
        {
            string sql = @"
            INSERT INTO TutorialAppSchema.Posts ([UserId],
                    [PostContent],
                    [PostTitle],
                    [PostCreated],
                    [PostUpdated]
                ) VALUES('" + this.User.FindFirst("userId")?.Value + 
            "', '" + postToAdd.PostContent +  
            "', '" + postToAdd.PostTitle +  
            "', GETDATE() , GETDATE() )";

            if(_dapper.ExecuteSql(sql))
            {
                return Ok();
            }

            throw new Exception("Error al insertar nuevo POST");
        }

        //[AllowAnonymous]
        [HttpPut("Post")]
        public IActionResult EditPost(PostToEditDto postToEdit)
        {
            string sql = @"UPDATE TutorialAppSchema.Posts 
            SET PostContent = '"+ postToEdit.PostTitle + "' , PostTitle = '" + postToEdit.PostTitle + 
            @"',  PostUpdated = GETDATE()
            WHERE PostId = " + postToEdit.PostId.ToString() + "AND UserId = " + this.User.FindFirst("userId")?.Value ;

            if(_dapper.ExecuteSql(sql))
            {
                return Ok();
            }

            throw new Exception("Error al actualizar el POST con id = " + postToEdit.PostId.ToString());
        }

        [HttpDelete("Post/{postId}")]
        public IActionResult DeletePost(int postId)
        {
            string sql = @" DELETE FROM TutorialAppSchema.Posts 
            WHERE PostId = " + postId.ToString() + "AND UserId = " + this.User.FindFirst("userId")?.Value ;

            if(_dapper.ExecuteSql(sql))
            {
                return Ok();
            }

            throw new Exception("Error al borrar el POST con id = " + postId.ToString());
        }
    }
}