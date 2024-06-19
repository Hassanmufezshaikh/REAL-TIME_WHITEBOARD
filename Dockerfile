FROM node:16.14.2-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]






# # Can be adjusted with docker build --build-arg RUNTIME_IMAGE=mirror.com/openjdk:21
# ARG BUILDER_IMAGE=eclipse-temurin:21-jdk
# ARG RUNTIME_IMAGE=eclipse-temurin:21-jre

# FROM ${BUILDER_IMAGE} AS BUILDER

# WORKDIR /app/

# ARG KEYCLOAK_VERSION=24.0.5
# ARG MAVEN_CLI_OPTS="-ntp -B"

# COPY .mvn .mvn
# COPY mvnw .
# COPY pom.xml .

# RUN ./mvnw ${MAVEN_CLI_OPTS} -q dependency:go-offline

# COPY src src

# RUN ./mvnw ${MAVEN_CLI_OPTS} clean package -DskipTests -Dkeycloak.version=${KEYCLOAK_VERSION} \
#     -Dlicense.skipCheckLicense -Dcheckstyle.skip -Dmaven.test.skip=true -Dmaven.site.skip=true \
#     -Dmaven.javadoc.skip=true -Dmaven.gitcommitid.skip=true

# FROM ${RUNTIME_IMAGE}

# ARG JAR=./target/keycloak-config-cli.jar
# ENV JAVA_OPTS="" KEYCLOAK_SSL_VERIFY=true IMPORT_FILES_LOCATIONS=file:/config/*

# # $0 represents the first CLI arg which is not inside $@
# ENTRYPOINT exec java $JAVA_OPTS -jar /app/keycloak-config-cli.jar $0 $@

# COPY --from=BUILDER /app/target/keycloak-config-cli.jar /app/keycloak-config-cli.jar

# USER 65534

# # kadhbsfkhbd
# # Step 1: Build the React app
# FROM node:14 AS build

# # Set working directory
# WORKDIR /app

# # Copy the package.json and package-lock.json to install dependencies
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the React app
# RUN npm run build

# # Step 2: Setup the server
# FROM node:14

# # Set working directory
# WORKDIR /app

# # Copy only the server-side code and the build directory from the previous stage
# COPY --from=build /app/build ./build
# COPY --from=build /app/server ./server
# COPY --from=build /app/package*.json ./

# # Install server dependencies
# RUN npm install --only=production

# # Expose the port the server will run on
# EXPOSE 4000

# # Start the server
# CMD ["node", "server/index.js"]

