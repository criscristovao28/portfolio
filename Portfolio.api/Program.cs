using Microsoft.EntityFrameworkCore;
using Portfolio.api.Data;
using Portfolio.api.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSqlServer<PortFolioContext>(builder.Configuration.GetConnectionString("ServerConnection"));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.MapPost("/Contacts", async (PortFolioContext context, Contact contact) =>
{
    await context.Contacts.AddAsync(contact);
    await context.SaveChangesAsync();
    return Results.Ok(contact);
}).WithOpenApi();

app.MapGet("/Contacts", async (PortFolioContext context) =>
{
    var contacts = await context.Contacts.ToListAsync();
    return Results.Ok(contacts);
}).WithOpenApi();

app.Run();

