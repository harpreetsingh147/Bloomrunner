#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["src/Gateways/Mobile/Mobile.csproj", "src/Gateways/Mobile/"]
RUN dotnet restore "src/Gateways/Mobile/Mobile.csproj"
COPY . .
WORKDIR "/src/src/Gateways/Mobile"
RUN dotnet build "Mobile.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Mobile.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Mobile.dll"]