This small project demonstrates workaround to get Codeship to build your custom images.

Run 

    jet steps
    
It's going to build only `example.com/service-x` and run will result in an error

    (HTTP code 404) no such container - No such image: example.com/quick-run:latest

That's because service-x wants to create container out of custom (non-public) image.
Since service-x does not define link to `quick-run` service then `quick-run` is not built.

To tackle this you can add link from `service-x` to `quick-run` and configure `quick-run` with command `sleep 5`.
That command is required so that `quick-run` service does not exit too quick, which would cause another error,
as codeship does not want to link to non-running containers.
