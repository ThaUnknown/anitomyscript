FROM emscripten/emsdk:latest AS build

WORKDIR /src
COPY build-config.mjs build.mjs ./
COPY src/ src/
COPY include/ include/

RUN mkdir -p dist && node build.mjs

FROM alpine
COPY --from=build /src/dist/ /out/
