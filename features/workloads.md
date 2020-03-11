# Workloads

The Workloads tab gives an overview of every workload running in your cluster.
You can see what images are being used, resource requests and limits,
and cost estimates.

> We estimate costs based on pricing for AWS on-demand pricing. We use the numbers provided by AWS to come up with average per-CPU and per-GB-RAM costs. We multiply these by the resources available in your cluster, and use the maximum of CPU and RAM pricing to come up with the final number. This results in a conservative estimate - your bill will likely be less.

<img :src="$withBase('/img/workloads.png')" alt="workloads">
