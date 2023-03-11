#==============================================================================
# Containers got their own file system
#------------------------------------------------------------------------------
# It can reflect the local file system, in the workdir with COPY . .
#
# But once a container is started, changed will only be made inside the
# container, by default there are no mapping between the container files
# and the local files
#==============================================================================
FROM node:14

#========================================================================
# VOLUME
#------------------------------------------------------------------------
# Volumes are folders that are shared between the host and the container
# containers got read & write data into a volume
#
# Voumes are not part of the image, they are created when the container
# is started
# 
# Volumes are not removed when the container is removed
#------------------------------------------------------------------------
#------------------------------------------------------------------------
# There are two types of volumes:
#     - Volumes are managed by docker, unlike bind mounts
#***********************************************************************
# - anonymous volumes
#     - created when the container is started
#     - removed if you run container with --rm
#     - without --rm, the volume is kept and you have to remove it manually
#         - even though anoymous volumes isn't removed, rerun docker run
#           will create a new volume
#***********************************************************************
# - named volumes
#    - created when the container is started for the first time
#    - kept when the container is removed, and can be reused
#    - can be shared between containers
#    - docker run -v my-volume:/app/feedback
#***********************************************************************
#------------------------------------------------------------------------
#------------------------------------------------------------------------
# Example of how we tell docker which folder should be kept, using the
# VOLUME instruction
#------------------------------------------------------------------------
# Adding volume bellow allows the use of bind mounts, without overwritting
# node_modules folder
#
# Longest / most specific path is kept when mixing volumes and 
# bind mounts
#========================================================================
VOLUME [ "/app/feedback" ]

#========================================================================
# Bind mounts
#      - managed by the host
#------------------------------------------------------------------------
# You define a folder / path on your host
# Great when working with editable data, such as source code
#------------------------------------------------------------------------
# Bind mounts override volumes, when you use npm install inside container
# it will install the dependencies inside the container, not the host
# 
# Then using bind mounts, will remove node_modules from the container
#------------------------------------------------------------------------
# Example command:
# $ docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image>
#========================================================================

#========================================================================
# Commands
#------------------------------------------------------------------------
# $ docker volume ls
# $ docker volume rm <volume>
# $ docker volume prune
#========================================================================
