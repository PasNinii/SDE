#===============================================================================
# FROM
#-------------------------------------------------------------------------------
# Docker image consists of multiple layers (instructions). Each instruction
# once executed, is cached and can be reused
#
# The first instruction is the base image, it's the starting point of the image
# and it's mandatory
# 
# The base image is a snapshot of the container at a given time, it's a
# read-only image. 
#
# When one layer is changed every instruction after is executed again
# (rebuild the image)
#
# When you modify local code for instance, you need to rebuild the image
#===============================================================================
FROM node


#===============================================================================
# WORKDIR
#-------------------------------------------------------------------------------
# Tells docker to run the following commands in the /app directory
#===============================================================================
WORKDIR /app


#===============================================================================
# COPY
#-------------------------------------------------------------------------------
# From local directory to the container
#------------------------------------------------------------------------------- 
#-------------------------------------------------------------------------------
# Layers being cached and package.json being stable file, it's good idea
# to copy it firs, it's good idea, therefore avoiding rebuilding this 
# layer every time you change local code
#===============================================================================
COPY package.json .


#===============================================================================
# RUN
#-------------------------------------------------------------------------------
# By default, run command are executed in root directory or WORKDIR
# RUN instructions are executed when creating the image
#===============================================================================
RUN npm install


#===============================================================================
# COPY
#-------------------------------------------------------------------------------
# Local file are most likely to change, so it's better to copy them after
# installing dependencies
#===============================================================================
COPY . .


#===============================================================================
# EXPOSE
#-------------------------------------------------------------------------------
# This is not mandatory, but it's a good practice to show which port you plan
# to use
#-------------------------------------------------------------------------------
# $ docker run -p host:container to map host port to container port
#===============================================================================
EXPOSE 80


#===============================================================================
# CMD
#-------------------------------------------------------------------------------
# CMD instructions are executed when the container is started
#===============================================================================
CMD ["npm", "run", "start"]

