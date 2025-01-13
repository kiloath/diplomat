cmake_minimum_required(VERSION 3.15)
project(diplomat_example CXX)



add_executable(diplomat_example src/diplomat_example.cpp src/main.cpp)



install(TARGETS diplomat_example DESTINATION "."
        RUNTIME DESTINATION bin
        ARCHIVE DESTINATION lib
        LIBRARY DESTINATION lib
        )
