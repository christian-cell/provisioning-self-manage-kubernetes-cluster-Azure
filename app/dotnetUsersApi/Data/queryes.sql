CREATE DATABASE DotNetCourseDatabase;
GO

--MyStrongPassword_12*
-- Server=localhost,4009;Database=DotNetCourseDatabase;User Id=sa;Password=MyStrongPassword_12*;TrustServerCertificate=true;

USE DotNetCourseDatabase

CREATE TABLE TutorialAppSchema.Posts(
    PostId INT IDENTITY(1,1),
    UserId INT,
    PostTitle NVARCHAR(255),
    PostContent NVARCHAR(MAX),
    PostCreated DATETIME,
    PostUpdated DATETIME
)

CREATE CLUSTERED INDEX cix_Posts_UserId_PostId ON TutorialAppSchema.Posts(UserId , PostId);

CREATE TABLE TutorialAppSchema.Users
(
    UserId INT IDENTITY(1, 1) PRIMARY KEY
    , FirstName NVARCHAR(50)
    , LastName NVARCHAR(50)
    , Email NVARCHAR(50)
    , Gender NVARCHAR(50)
    , Active BIT
);
